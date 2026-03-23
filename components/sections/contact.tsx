'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { useReveal } from '@/hooks/use-reveal'
import { CONTACT_INFO } from '@/lib/data'

const ICON_MAP = { Mail, Phone, MapPin } as const


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const headerRef = useReveal<HTMLDivElement>(0.1)
  const leftRef   = useReveal<HTMLDivElement>(0.1)
  const rightRef  = useReveal<HTMLDivElement>(0.1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Message sent successfully! I'll get back to you soon.")
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        <div ref={headerRef} className="reveal-on-scroll text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let&apos;s discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          <div ref={leftRef} className="reveal-on-scroll space-y-8" style={{ transitionDelay: '100ms' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I&apos;m always open to discussing new opportunities, interesting projects,
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {CONTACT_INFO.map((item) => {
                const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP]
                return (
                  <div
                    key={item.label}
                    className="flex items-center space-x-4 hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div ref={rightRef} className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                      <Input id="firstName" placeholder="John" required className="border-border/50 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                      <Input id="lastName" placeholder="Doe" required className="border-border/50 focus:border-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="border-border/50 focus:border-primary" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Project Discussion" required className="border-border/50 focus:border-primary" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Tell me about your project..." rows={5} required className="border-border/50 focus:border-primary" />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}