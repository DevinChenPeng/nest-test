import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/mysql';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoSchema } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    private readonly em: EntityManager,
    @InjectRepository(TodoSchema)
    private readonly todoRepository: EntityRepository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto);
    this.em.persist(todo);
    await this.em.flush();
    return todo;
  }

  findAll() {
    return this.todoRepository.findAll();
  }

  async findOne(id: string) {
    const todo = await this.todoRepository.findOne({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  async update(id: string, _updateTodoDto: UpdateTodoDto) {
    const todo = await this.findOne(id);
    this.em.assign(todo, _updateTodoDto);
    this.em.persist(todo);
    await this.em.flush();
  }

  async remove(id: string) {
    const todo = await this.findOne(id);
    this.em.remove(todo);
    await this.em.flush();
  }
}
