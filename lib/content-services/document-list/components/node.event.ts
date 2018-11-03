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

import { BaseEvent } from '@alfresco/adf-core';
import { MinimalNodeEntity, MinimalNodeEntryEntity } from 'alfresco-js-api';

export class NodeEntityEvent extends BaseEvent<MinimalNodeEntity> {

    value: MinimalNodeEntity;

    defaultPrevented: boolean;

    constructor(entity: MinimalNodeEntity) {
        super();
        this.value = entity;
    }
}

export class NodeEntryEvent extends BaseEvent<MinimalNodeEntryEntity> {

    value: MinimalNodeEntryEntity;

    defaultPrevented: boolean;

    constructor(entity: MinimalNodeEntryEntity) {
        super();
        this.value = entity;
    }
}
