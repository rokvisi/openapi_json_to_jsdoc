import { post_houses, get_houses, patch_houses, delete_houses, get_houses_single } from "./finished/houses/houses"
import { get_rooms_by_id, delete_rooms_by_id, patch_rooms_by_id } from "./finished/rooms_by_house_id/by_room_id/room";
import { get_rooms, post_rooms } from "./finished/rooms_by_house_id/rooms";

export const spec = patch_rooms_by_id;