import type { Preferences } from '@vben-core/preferences';
import type { DeepPartial } from '@vben-core/typings';

/**
 * 如果你想所有的app都使用相同的默认偏好设置，你可以在这里定义
 * 而不是去修改 @vben-core/preferences 中的默认偏好设置
 * @param preferences
 * @returns
 */

function defineOverridesPreferences(preferences: DeepPartial<Preferences>) {
  return {
    ...preferences,
    app: {
      defaultAvatar:
        'https://cdn.jsdelivr.net/gh/sokach7c/assets@1.0.1/logo/avatar.jpg',
      name: 'Sokach Admin',
    },
    logo: {
      source: 'https://cdn.jsdelivr.net/gh/sokach7c/assets@1.0.1/logo/logo.svg',
    },
    theme: {
      mode: 'light',
      radius: '0.5',
      semiDarkSidebar: true,
    },
  };
}

export { defineOverridesPreferences };

export * from '@vben-core/preferences';
