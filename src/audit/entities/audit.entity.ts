import { WebhookEvent } from "../../events/entities/events.entity";
import { Subscriptions } from "../../subscriptions/entities/subscriptions.entity";
import { EventStatus } from "../enums/audit-event.enum";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WebhookLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Subscriptions)
  subscription: Subscriptions;

  @ManyToOne(() => WebhookEvent)
  webhookEvent: WebhookEvent;

  @Column({ type: 'enum', enum: EventStatus })
  status: EventStatus;

  @Column()
  attempt_count: number;

  @Column()
  last_http_response_code: number;

  @Column()
  last_error_message: string;

  @Column()
  next_retry_at: string;
}
