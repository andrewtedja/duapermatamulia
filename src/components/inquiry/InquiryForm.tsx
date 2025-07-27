import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import Captcha from './Captcha'
import PhoneInput from './PhoneInput'

export default function InquiryForm() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg border-0">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">Organization *</Label>
                <Input
                  id="organization"
                  placeholder="Enter your organization"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      {' '}
                      {/* ✅ Force full width */}
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="id">Indonesia</SelectItem>
                      <SelectItem value="sg">Singapore</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="Enter your city"
                    required
                    className="w-full"
                  />{' '}
                  {/* ✅ */}
                </div>
              </div>

              <PhoneInput />
              <div className="space-y-2">
                <Label htmlFor="product">Product Categories *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cloud">Cloud Services</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what you need..."
                  className="min-h-32 resize-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="referral">Where Did You Hear About Us?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="partner">Partner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Captcha />
              {/* <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">
                  Sign me up for news and trends
                </Label>
              </div> */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 bg-orange-500 text-white"
                >
                  Submit Inquiry
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center">
                * Required fields
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
