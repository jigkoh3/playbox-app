import { AppmenuModel } from './appmenu-model';
import { FeatureModel } from './feature-model';
import { RoleModel } from './role-model';

export interface PermissionModel {
  roleID: RoleModel[];
  menuID: AppmenuModel[];
  featureID: FeatureModel[];
  createBy: string;
  createDate: number;
  updateBy: string;
  updateDate: number;
}
