/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ParameterValueModel } from './parameterValue.model';

export class ReportParameterDetailsModel {
    id: string;
    name: string;
    nameKey: string;
    type: string;
    value: any;
    options: ParameterValueModel[];
    dependsOn: string;

    constructor(obj?: any) {
        this.id = obj && obj.id;
        this.name = obj && obj.name || null;
        this.nameKey = obj && obj.nameKey || null;
        this.type = obj && obj.type || null;
        this.value = obj && obj.value || null;
        this.options = obj && obj.options || null;
        this.dependsOn = obj && obj.dependsOn || null;
    }
}
