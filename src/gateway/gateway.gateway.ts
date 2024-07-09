import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { GatewayService } from './gateway.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { Server } from 'socket.io'
import { OnModuleInit, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guad';

@WebSocketGateway()
@UseGuards(JwtGuard)
export class GatewayGateway implements OnModuleInit {
  constructor(private readonly gatewayService: GatewayService) {}
  @WebSocketServer()
  server:Server

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Client connected');
    });
  }



  @SubscribeMessage('createGateway')
  create(@MessageBody() createGatewayDto: CreateGatewayDto) {
    this.server.emit('onMessage',{
      msg: createGatewayDto,
    })
    return this.gatewayService.create(createGatewayDto);
  }

  @SubscribeMessage('findAllGateway')
  findAll() {
    return this.gatewayService.findAll();
  }

  @SubscribeMessage('findOneGateway')
  findOne(@MessageBody() id: number) {
    return this.gatewayService.findOne(id);
  }

  @SubscribeMessage('updateGateway')
  update(@MessageBody() updateGatewayDto: UpdateGatewayDto) {
    return this.gatewayService.update(updateGatewayDto.id, updateGatewayDto);
  }

  @SubscribeMessage('removeGateway')
  remove(@MessageBody() id: number) {
    return this.gatewayService.remove(id);
  }
}
