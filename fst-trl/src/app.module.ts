import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './home/home.module';


@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.SUPABASE_DATABASE_URL,
    autoLoadEntities: true,
    synchronize: false,
    ssl: {
    rejectUnauthorized: false,
    },
    }),
    AuthModule,
    UserModule,
    HomeModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
