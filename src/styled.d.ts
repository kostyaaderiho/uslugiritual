// src/styled.d.ts
import 'styled-components';
import type { GlobalToken } from 'antd/es/theme/interface';

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends GlobalToken {}
}
