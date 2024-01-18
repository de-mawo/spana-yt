import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  name: string;
  label: string;
  onChange: (value: number) => void;
  value?: number
};

const CreditField = ({ label, name, onChange, value }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    onChange(value);
  };
  return (
    <div className="flex flex-col">
      <Label className="text-xs" htmlFor={name}>
        {label}
      </Label>
      <Input type="number" onChange={handleChange} value={value} />
    </div>
  );
};

export default CreditField;
