import ConversionsAndBudget from "./settingsOptions/conversionsAndBudget";
import MessageAndSurpport from "./settingsOptions/messageAndSupport";
import Subscription from "./settingsOptions/subscription";

export default function NotificationsSettings() {
  return (
    <section className="flex flex-col items-center justify-end md:py-4">
      <Subscription/>
      <ConversionsAndBudget/>
      <MessageAndSurpport/>
    </section>
  );
}
