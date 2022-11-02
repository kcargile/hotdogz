import { GlobalSettings } from "./GlobalSettings";

export interface IGlobalSettingsContext {
    settings: GlobalSettings;
    updateSettings?: (s?: GlobalSettings) => void;
}
