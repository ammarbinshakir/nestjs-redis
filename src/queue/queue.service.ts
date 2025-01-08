import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('userQueue') private userQueue: Queue) {}

  async sendWelcomeMessage(userId: number) {
    await this.userQueue.add('sendWelcome', { userId });
  }
}
