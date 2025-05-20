import { NotificationStategy } from "./notification-strategy.nterface";

export class PushNotification implements
NotificationStategy{
    send(message: string): void {
        console.log(`Push enviado: ${message}`);
    }
}
