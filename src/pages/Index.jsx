import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Clothes Store</h1>
        <nav>
          <Button variant="link" className="mr-4">Home</Button>
          <Button variant="link" className="mr-4">Shop</Button>
          <Button variant="link" className="mr-4">About</Button>
          <Button variant="link">Contact</Button>
        </nav>
      </header>
      <Separator />
      <main className="my-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Product 1</CardTitle>
                <CardDescription>$29.99</CardDescription>
              </CardHeader>
              <CardContent>
                <p>High-quality cotton t-shirt.</p>
              </CardContent>
              <CardFooter>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Product 2</CardTitle>
                <CardDescription>$49.99</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Comfortable jeans.</p>
              </CardContent>
              <CardFooter>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Product 3</CardTitle>
                <CardDescription>$19.99</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Stylish hat.</p>
              </CardContent>
              <CardFooter>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Label htmlFor="email" className="mr-4">Email:</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="mr-4" />
            <Button>Subscribe</Button>
          </div>
        </section>
      </main>
      <Separator />
      <footer className="py-4 text-center">
        <p>&copy; 2023 Clothes Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;