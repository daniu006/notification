import { NotificationStategy } from "./notification-strategy.nterface";

export class NotificationContext{
    private strategy: NotificationStategy;
    
    setStrategy(strategy: NotificationStategy){
        this.strategy =strategy;
    }

    executeStrategy(message: string){
        this.strategy.send(message);
    }
}