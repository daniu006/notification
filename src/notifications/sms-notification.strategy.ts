import { NotificationStategy } from "./notification-strategy.nterface";

export class SMSNotification implements
NotificationStategy{
    send(message: string): void {
        console.log(`Email enviado:${message}`)
    }
}