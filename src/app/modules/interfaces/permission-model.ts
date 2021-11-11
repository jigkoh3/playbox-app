import { AppmenuModel } from './appmenu-model';
import { FeatureModel } from './feature-model';
import { RoleModel } from './role-model';

export interface PermissionModel {
  role_code: RoleModel[];
  feature_code: FeatureModel[];
  menu_code: AppmenuModel[];
  create_by: string;
  create_date: number;
  update_by: string;
  update_date: number;
}
