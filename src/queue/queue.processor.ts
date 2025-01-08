import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('userQueue')
export class QueueProcessor {
  @Process('sendWelcome')
  async sendWelcomeMessage(job: Job) {
    const { userId } = job.data;
    console.log(`Sending hello message to user with ID: ${userId}`);

    // Example of a simulated "hello" message to Redis
    const redis = job.queue.client; // Access the Redis client directly
    await redis.set(`user:${userId}:hello`, 'Hello, user!'); // Set a test value in Redis

    console.log(`Redis 'user:${userId}:hello' set to: Hello, user!`);
  }
}
