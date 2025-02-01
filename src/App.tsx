import { LikedPostsContextProvider } from "./contexts/likedPostsContext";
import { AppRoutes } from "./Routes/Routes";

export function App(){
    return(
        <LikedPostsContextProvider>
            <AppRoutes></AppRoutes>
        </LikedPostsContextProvider>
    )
}

