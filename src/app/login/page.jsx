"use client"
import { Card, Separator } from "@heroui/react";
import {
    Button, Description, FieldError, Form, Input, Label, TextField
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const loginPage = () => {


    
    return (
        <div>
            <div className="max-w-7xl mx-auto py-10">
                <div className="text-center my-3">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <p>Start your adventure with Wanderlust</p>
                </div>
                <Card className="border rounded-none w-1/2 mx-auto">
                    <Form className="flex w-96 flex-col gap-4">
                        <TextField
                            
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </Description>
                            <FieldError />
                        </TextField>
                        <div className="flex justify-center gap-2">
                            <Button className={"rounded-none w-full bg-cyan-500"} type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>

                    <div className="flex justify-center items-center gap-3">
                        <Separator />
                        <div className="whitespace-nowrap"> Or sign up with </div>
                        <Separator />
                    </div>
                    <div>
                        <Button
                            // onClick={handleGoogleSignin}
                            variant="outline"
                            className={"w-full rounded-none"}
                        >
                            <FcGoogle /> Sign in with Google
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default loginPage;