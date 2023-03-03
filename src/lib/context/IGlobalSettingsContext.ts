import { GlobalSettings } from "./GlobalSettings";

export interface GlobalSettingsContext {
    settings: GlobalSettings;
    updateSettings?: (s?: GlobalSettings) => void;
}
