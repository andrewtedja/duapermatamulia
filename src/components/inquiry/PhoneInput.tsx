import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export default function PhoneInput() {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-700">
        Phone Number *
      </Label>
      <div className="flex gap-2">
        <Select>
          <SelectTrigger
            className="w-24 h-12 border-gray-300
                   text-sm px-3 py-2 leading-none"
          >
            <SelectValue placeholder="+1" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="+1">+1</SelectItem>
            <SelectItem value="+44">+44</SelectItem>
            <SelectItem value="+49">+49</SelectItem>
            <SelectItem value="+33">+33</SelectItem>
            <SelectItem value="+61">+61</SelectItem>
            <SelectItem value="+81">+81</SelectItem>
            <SelectItem value="+65">+65</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="tel"
          placeholder="Enter your phone number"
          className="flex-1 h-9 border-gray-300 focus:border-orange-500 focus:ring-orange-500 
                 text-sm px-3 py-2 leading-none"
          required
        />
      </div>
    </div>
  )
}
