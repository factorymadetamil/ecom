import { Check } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface SuccessModalProps {
  isOpen: boolean;
  message: string;
}

export default function SuccessModal({ isOpen, message }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
      <Card className="bg-green-50 border-green-200 pointer-events-auto animate-pulse">
        <CardContent className="p-6 flex items-center space-x-3">
          <div className="bg-green-500 rounded-full p-2">
            <Check className="w-6 h-6 text-white" />
          </div>
          <p className="text-green-800 font-semibold">{message}</p>
        </CardContent>
      </Card>
    </div>
  );
}