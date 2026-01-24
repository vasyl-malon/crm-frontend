import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Spinner } from "./ui/spinner";
import { cn } from "@/lib/utils";

type OTPFormProps = {
  value: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export const OTPForm = ({
  value,
  isLoading,
  onChange,
  onSubmit,
  ...props
}: OTPFormProps) => {
  return (
    <Card {...props}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Enter verification code</CardTitle>
        <CardDescription>We sent a 4-digit code to your email.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <form> */}
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="otp" className="sr-only">
              Verification code
            </FieldLabel>
            <InputOTP
              maxLength={4}
              id="otp"
              required
              value={value}
              onChange={onChange}
            >
              <InputOTPGroup className="mx-auto gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
            <FieldDescription className="text-center">
              Enter the 4-digit code sent to your email.
            </FieldDescription>
          </Field>
          <Button disabled={isLoading} onClick={onSubmit}>
            <Spinner
              data-icon="inline-start"
              className={cn("hidden", isLoading && "inline")}
            />
            Verify
          </Button>
          <FieldDescription className="text-center">
            Didn&apos;t receive the code? <a href="#">Resend</a>
          </FieldDescription>
        </FieldGroup>
        {/* </form> */}
      </CardContent>
    </Card>
  );
};
