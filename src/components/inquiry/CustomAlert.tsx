import { CheckCircle2, AlertTriangle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CustomAlertProps {
  message: string
  type: 'success' | 'error'
  onDismiss: () => void
  className?: string
}

export default function CustomAlert({
  message,
  type,
  onDismiss,
  className
}: CustomAlertProps) {
  const isSuccess = type === 'success'

  return (
    <div
      className={cn(
        'relative w-full p-4 rounded-lg border-l-4 shadow-sm transition-all duration-300',
        isSuccess
          ? 'bg-green-50 border-l-green-500 border-green-200'
          : 'bg-red-50 border-l-red-500 border-red-200',
        className
      )}
      role={isSuccess ? 'status' : 'alert'}
      aria-live={isSuccess ? 'polite' : 'assertive'}
    >
      <div className="flex items-center gap-3 pr-8">
        <div className="flex-shrink-0">
          {isSuccess ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-red-600" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className={cn(
              'text-sm font-medium leading-5',
              isSuccess ? 'text-green-800' : 'text-red-800'
            )}
          >
            {message}
          </p>
        </div>
      </div>

      <button
        onClick={onDismiss}
        className={cn(
          'absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors',
          isSuccess
            ? 'text-green-600 hover:bg-green-100'
            : 'text-red-600 hover:bg-red-100'
        )}
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
