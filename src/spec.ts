import { login, register, logout } from "./finished/auth/auth";

import { post_houses, get_houses } from "./finished/houses/houses"
import { get_houses_by_id, delete_houses_by_id, patch_houses_by_id } from "./finished/houses/by_house_id/houses";

import { get_rooms, post_rooms } from "./finished/rooms_by_house_id/rooms";
import { get_rooms_by_id, delete_rooms_by_id, patch_rooms_by_id } from "./finished/rooms_by_house_id/by_room_id/room";

import { get_notes, post_notes } from "./finished/notes_by_house_id_by_room_id/notes";
import { delete_notes_by_id, get_notes_by_id, patch_notes_by_id } from "./finished/notes_by_house_id_by_room_id/by_note_id/note";

import { get_house_notes, post_house_notes } from "./finished/house_note_by_house_id/notes";
import { delete_house_notes_by_id, get_house_notes_by_id, patch_house_notes_by_id } from "./finished/house_note_by_house_id/by_note_id/notes";

import { get_common_areas, post_common_areas } from "./finished/common_areas_by_house_id/common_areas";
import { delete_common_areas_by_id, get_common_areas_by_id, patch_common_areas_by_id } from "./finished/common_areas_by_house_id/by_house_id/common_areas";


export const spec = patch_common_areas_by_id;