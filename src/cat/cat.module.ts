import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
// import { UserModule } from 'src/user/user.module';

@Module({
  // imports: [UserModule],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
