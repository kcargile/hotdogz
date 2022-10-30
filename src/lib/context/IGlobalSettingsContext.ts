import { IGlobalSettings } from "./IGlobalSettings";

export interface IGlobalSettingsContext {
    settings: IGlobalSettings;
    updateSettings?: (s: IGlobalSettings) => void;
}
