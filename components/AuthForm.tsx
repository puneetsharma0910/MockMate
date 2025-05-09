"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form} from "@/components/ui/form"
import Image from "next/image";
import Link from "next/link";
import {toast} from "sonner";
import FormField from "@/components/FormField";
import {useRouter} from "next/navigation";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/firebase/client";
import {signIn, signUp} from "@/lib/actions/auth.actions";

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    })
}

const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter();
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if(type === 'sign-up') {
                const { name, email, password } = values;

                const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

                const result = await signUp({
                    uid: userCredentials.user.uid,
                    name: name!,
                    email,
                    password,
                })

                if(!result?.success) {
                    toast.error(result?.message);
                    return;
                }

                toast.success('Account created successfully. Please sign in.');
                router.push('/sign-in')
            } else {
                const { email, password } = values;

                try {
                    const userCredential = await signInWithEmailAndPassword(auth, email, password);
                    const idToken = await userCredential.user.getIdToken();

                    if(!idToken) {
                        toast.error('Failed to get authentication token');
                        return;
                    }

                    const result = await signIn({
                        email,
                        idToken
                    });

                    if (!result?.success) {
                        toast.error(result?.message);
                        return;
                    }

                    toast.success('Signed in successfully');
                    router.push('/');
                } catch (error: any) {
                    console.error('Sign in error:', error);
                    if (error.code === 'auth/invalid-credential') {
                        toast.error('Invalid email or password');
                    } else if (error.code === 'auth/user-not-found') {
                        toast.error('No account found with this email');
                    } else {
                        toast.error('Failed to sign in. Please try again.');
                    }
                }
            }
        } catch (error: any) {
            console.error('Form submission error:', error);
            toast.error(error?.message || 'An unexpected error occurred');
        }
    }

    const isSignIn = type === 'sign-in';

    return (
        <div className="card-border lg:min-w-[566px] hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image
                        src="/job-interview.png"
                        alt="logo"
                        height={32}
                        width={38}
                    />
                    <h2 className="text-primary-100 font-bold">MockMate</h2>
                </div>

                <h3 className="text-center text-white">Practice job interview with AI</h3>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSignIn && (
                            <FormField
                                control={form.control}
                                name="name"
                                label="Name"
                                placeholder="Your Name"
                            />
                        )}
                        <FormField
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="Your email address"
                            type="email"
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                        />

                        <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
                    </form>
                </Form>
                
                <p className="text-center text-light-400">
                    {isSignIn ? 'No account yet?' : 'Have an account already?'}
                    <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-primary-100 ml-1 hover:text-primary-200 transition-colors">
                        {!isSignIn ? "Sign in" : 'Sign up'}
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default AuthForm