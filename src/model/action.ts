import {Model} from './model';

export class Action extends Model {
  title: string;
  description: string;
  type: string;
  soon?: boolean;
}
