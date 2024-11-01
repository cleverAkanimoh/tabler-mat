import { useState } from "react";
import ToggleSwitch from "@/custom-components/form/toggleSwitch";


export default function ConversionsAndBudget() {
  const [isLow, setIsLow] = useState(false);
  const [isAchieved, setIsAcheived] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  return (
    <div className="grid md:grid-cols-2 w-full mx-2 md:w-[90%] mb-8">
      <section>
        <div className="flex flex-col justify-center">
          <h3 className="font-[700] text-[0.8rem] text-gray-600">
            Conversions & Budget
          </h3>
          <p className="text-xs text-gray-600">
            Here are the notification you will get on conversion & transaction.
          </p>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col justify-center">
            <h3 className="font-[700] text-[0.8rem] text-gray-600">
              Low Budget
            </h3>
            <p className="text-xs text-gray-600">
              Get notify when your conversion budget is running low
            </p>
          </div>
          <ToggleSwitch id={"toggle"} style="ml-2" state={isLow} setState={setIsLow} />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col justify-center">
            <h3 className="font-[700] text-[0.8rem] text-gray-600">
              Conversion Achieved
            </h3>
            <p className="text-xs text-gray-600">
              Get notified when your conversion metric for the month has been
              achieved
            </p>
          </div>
          <ToggleSwitch id={"isAchieved"} style="ml-2" state={isAchieved} setState={setIsAcheived} />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col justify-center">
            <h3 className="font-[700] text-[0.8rem] text-gray-600">Payment</h3>
            <p className="text-xs text-gray-600">
              Get notified when payment Is successful & failed
            </p>
          </div>
          <ToggleSwitch id={"isPayments"} style="ml-2" state={isPayment} setState={setIsPayment} />
        </div>
      </section>
    </div>
  );
}
