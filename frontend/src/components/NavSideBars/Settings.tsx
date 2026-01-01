import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowDown01Icon,
	LockPasswordIcon,
	Shield01Icon,
	Notification01Icon,
	UserRemove01Icon,
} from "@hugeicons/core-free-icons";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

/***
 * Reset password,
 * 2 step Verifications,
 * Notification preferences
 * Account Deactivation
 */
function Settings() {
	const items = [
		{
			key: "reset-password",
			title: "Reset password",
			leftIcon: LockPasswordIcon,
			content: "Change your password from here.",
		},
		{
			key: "two-step",
			title: "2 step Verifications",
			leftIcon: Shield01Icon,
			content: "Enable or disable 2-step verification.",
		},
		{
			key: "notifications",
			title: "Notification preferences",
			leftIcon: Notification01Icon,
			content: "Manage how you receive notifications.",
		},
		{
			key: "deactivate",
			title: "Account Deactivation",
			leftIcon: UserRemove01Icon,
			content: "Deactivate your account.",
		},
	];

	return (
		<div className="w-full max-w-xl space-y-3">
			{items.map((item) => (
				<Collapsible key={item.key} className="rounded-lg border">
					<CollapsibleTrigger asChild>
						<Button
							type="button"
							className={cn(
								"flex w-full items-center justify-between gap-3 p-4 text-left",
								"hover:bg-accent hover:text-accent-foreground"
							)}
						>
							<div className="flex items-center gap-3">
								<HugeiconsIcon icon={item.leftIcon} strokeWidth={2} />
								<span className="font-medium">{item.title}</span>
							</div>
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								strokeWidth={2}
								className="text-muted-foreground"
							/>
						</Button>
					</CollapsibleTrigger>
					<CollapsibleContent className="px-4 pb-4 text-sm text-muted-foreground">
						{item.content}
					</CollapsibleContent>
				</Collapsible>
			))}
		</div>
	);
}

export default Settings;
