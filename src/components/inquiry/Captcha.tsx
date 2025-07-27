import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RefreshCw } from 'lucide-react'

export default function Captcha() {
  return (
    <div className="space-y-2">
      <Label htmlFor="captcha" className="text-sm font-medium text-gray-700">
        CAPTCHA Verification *
      </Label>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-100 p-3 border border-gray-300">
          <div className="bg-white px-3 py-2 border border-gray-200 font-mono text-lg tracking-wider">
            471165
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="p-1 h-8 w-8"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        <Input
          id="captcha"
          type="text"
          placeholder="Enter the code"
          className="flex-1 h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
          required
        />
      </div>
    </div>
  )
}
