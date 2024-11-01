import { useState } from "react";
import ToggleSwitch from "@/custom-components/form/toggleSwitch";

export default function MessageAndSurpport() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="grid md:grid-cols-2 w-full mx-2 md:w-[90%] mb-8">
      <section>
        <div className="flex flex-col justify-center">
          <h3 className="font-[700] text-[0.8rem] text-gray-600">
            Message & Support
          </h3>
          <p className="text-xs text-gray-600">
            Here are the notification you will get on report
          </p>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col justify-center">
            <h3 className="font-[700] text-[0.8rem] text-gray-600">Support</h3>
            <p className="text-xs text-gray-600">
              Get notification when the Admin & support Group message you.
            </p>
          </div>
          <ToggleSwitch id={"isChecked"} style="ml-2" state={checked} setState={setChecked} />
        </div>
      </section>
    </div>
  );
}
