



export default function NotificationMessage () {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 rounded-md bg-[#9797FB] my-8">
            <h1 className="text-xs text-center md:text-start">🔔 Turn on push notifications to notify you even when u are not on our platform</h1>
            <div className="mt-4">
                <button className="text-white rounded-md !text-xs px-4 py-2">Allow push notification</button>
                <button className="!bg-[unset] text-white rounded-md !text-xs px-4 py-2 mx-4">Dismiss</button>
            </div>
        </div>
    );
}