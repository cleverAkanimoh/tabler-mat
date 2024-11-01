import ChatRoom from "../message/chat";
import NavigationItem from "./navigationItem";
import NotificationMessage from "./notificationMessage";

export default function AdminAndSurpport() {
    const messages = [
        {
          title: "Admin",
          message: "Hello The Design Buddy, Thank you for your inquiry. We are glad to assist you.",
          date: "3 mins",
          isActive: { status: true, color: "#00FF00" }
        },
        {
          title: "Support",
          message: "Hi there! Your support request has been received. We'll get back to you shortly.",
          date: "5 mins",
          isActive: { status: false, color: "#FF0000" }
        },
        {
          title: "Notification",
          message: "You have a new message from a client. Please check your inbox.",
          date: "10 mins",
          isActive: { status: true, color: "#00FF00" }
        },
        {
          title: "Alert",
          message: "Important update: System maintenance scheduled for tonight. Please be prepared.",
          date: "15 mins",
          isActive: { status: true, color: "#00FF00" }
        },
        {
          title: "Reminder",
          message: "Don't forget to submit your weekly progress report by the end of the day.",
          date: "20 mins",
          isActive: { status: false, color: "#FF0000" }
        },
        {
          title: "Admin",
          message: "Welcome to our platform! Feel free to explore our features and services.",
          date: "25 mins",
          isActive: { status: true, color: "#00FF00" }
        },
        {
          title: "Notification",
          message: "Your account balance is running low. Consider adding funds to avoid disruption.",
          date: "30 mins",
          isActive: { status: true, color: "#00FF00" }
        },
        {
          title: "Support",
          message: "We apologize for the inconvenience caused. Our team is working to resolve the issue.",
          date: "35 mins",
          isActive: { status: false, color: "#FF0000" }
        },
        {
          title: "Alert",
          message: "Severe weather warning issued for your area. Please take necessary precautions.",
          date: "40 mins",
          isActive: { status: true, color: "#00FF00" }
        },
        {
          title: "Reminder",
          message: "Upcoming meeting reminder: Team brainstorming session at 2 PM today.",
          date: "45 mins",
          isActive: { status: true, color: "#00FF00" }
        }
      ];
      
      
      
    
  return (
    <section className="my-4">
      <div className="flex flex-col">
        <h1 className="font-[700] text-[1.125rem]">Admin & Support</h1>
        <p className="text-xs">Here is where you reach out to the Admin and  find messages from Support teams.</p>
      </div>
      <NotificationMessage/>
      <div className="grid md:grid-cols-6 my-4">
        <div className="col-span-2 bg-white rounded-sm px-4">
            {
                messages.map(({
                    title,
                    message,
                    date,
                    isActive
                  }:any, index:any)=>(
                    <div className="cursor-pointer" key={index}>
                        <NavigationItem property="message" title={title} message={message} date={date} isActive={isActive}/>
                    </div>
                ))
            }
        </div>
        <div className="md:mr-2 col-span-4">
            <ChatRoom/>
        </div>
      </div>
    </section>
  );
}
