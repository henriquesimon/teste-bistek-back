import { JoiSchema, JoiSchemaOptions, UPDATE } from 'nestjs-joi';
import * as Joi from 'joi';

@JoiSchemaOptions({ allowUnknown: false })
export class ProductDTO {
  @JoiSchema([UPDATE], Joi.string().required())
  @JoiSchema(Joi.string().optional())
  description!: string;
  @JoiSchema(
    Joi.string()
      .valid('Bebidas', 'Mercearia', 'Padaria', 'Bazar', 'Frios', '')
      .required(),
  )
  category!: string;
  @JoiSchema(Joi.boolean().optional())
  isActive?: boolean;
}
