import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { BullModule } from "@nestjs/bull";
import { UserModule } from "./modules/user/user.module";
import { BookModule } from "./modules/book/book.module";
import { StationaryModule } from "./modules/stationary/stationary.module";
import { KhataModule } from "./modules/khata/khata.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    BullModule.forRoot({
      url: process.env.REDIS_URL,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
    UserModule,
    BookModule,
    StationaryModule,
    KhataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
