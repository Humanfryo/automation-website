import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // todo: remove mock functionality - implement actual form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center border border-primary/30 bg-primary/5"
      >
        <CheckCircle className="w-16 h-16 text-primary mb-4" />
        <h3 className="text-xl font-heading font-bold mb-2">Message Sent</h3>
        <p className="text-muted-foreground font-mono text-sm">
          I'll respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider font-mono">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your name" 
                  className="rounded-none border-border bg-card focus:border-primary"
                  {...field} 
                  data-testid="input-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider font-mono">Email</FormLabel>
              <FormControl>
                <Input 
                  type="email"
                  placeholder="Enter your email address"
                  className="rounded-none border-border bg-card focus:border-primary"
                  {...field}
                  data-testid="input-email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider font-mono">Subject (Optional)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="What is this about?"
                  className="rounded-none border-border bg-card focus:border-primary"
                  {...field}
                  data-testid="input-subject"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider font-mono">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Your message here..."
                  rows={5}
                  className="rounded-none border-border bg-card focus:border-primary resize-none"
                  {...field}
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full h-12 rounded-none gradient-primary border-0 font-mono uppercase tracking-wider"
          disabled={form.formState.isSubmitting}
          data-testid="button-submit"
        >
          Send Message
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </Form>
  );
}
