import { GlobalSettings } from "./GlobalSettings";

export interface GlobalSettingsContextProps {
    settings: GlobalSettings;
    updateSettings?: (s?: GlobalSettings) => void;
}
