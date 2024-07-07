import { Switch } from "@headlessui/react";

// Toggle component
// Value: boolean
// OnChange: Function to change the value
export default function Toggle({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (enabled: boolean) => void;
}) {
  return (
    <Switch
      checked={value}
      onChange={onChange}
      className="group relative flex h-6 w-10 cursor-pointer rounded-full bg-slate-600/50 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-slate-600"
    >
      <span className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4" />
    </Switch>
  );
}
