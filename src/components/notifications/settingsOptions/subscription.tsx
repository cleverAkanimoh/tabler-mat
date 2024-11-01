import { useState } from "react";
import ToggleSwitch from "@/custom-components/form/toggleSwitch";

export default function Subscription() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  return (
    <div className="grid md:grid-cols-2 w-full mx-2 md:w-[90%] mb-8">
      <section>
        <div className="flex flex-col justify-center">
          <h3 className="font-[700] text-[0.8rem] text-gray-600">
            Subscriptions
          </h3>
          <p className="text-xs text-gray-600">
            Here are the notification you will get about your Subscription
          </p>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col justify-center">
            <h3 className="font-[700] text-[0.8rem] text-gray-600">
              Update Subscription
            </h3>
            <p className="text-xs text-gray-600">
              Get notification when you have to update your subscription
            </p>
          </div>
          <ToggleSwitch
            id={"isUpdate"}
            style="ml-2"
            state={isUpdate}
            setState={setIsUpdate}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col justify-center">
            <h3 className="font-[700] text-[0.8rem] text-gray-600">
              Subscription Discounts
            </h3>
            <p className="text-xs text-gray-600">
              Extend your subscription and get additional conversion allocated
              to you.
            </p>
          </div>
          <ToggleSwitch
            id={"discounts"}
            style="ml-2"
            state={isDiscount}
            setState={setIsDiscount}
          />
        </div>
      </section>
    </div>
  );
}
