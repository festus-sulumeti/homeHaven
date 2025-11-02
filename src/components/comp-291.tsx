import { CircleCheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type AuthPopupProps = {
  title?: string
  message?: string
  visible?: boolean
  className?: string
}

export function AuthPopup({
  title = "Success",
  message = "Action completed successfully.",
  visible = false,
  className,
}: AuthPopupProps) {
  if (!visible) return null

  return (
    <div className={cn("fixed bottom-4 right-4 z-50 max-w-[400px] rounded-md border bg-background p-4 shadow-lg", className)}>
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <CircleCheckIcon
            className="mt-0.5 shrink-0 text-emerald-500"
            size={16}
            aria-hidden="true"
          />
          <div className="flex grow flex-col gap-3">
            <div className="space-y-1">
              <p className="text-sm font-medium">{title}</p>
              {message && (
                <p className="text-sm text-muted-foreground">{message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPopup