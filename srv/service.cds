using {db} from '../db/schema';

service HelloWorld {
    entity Items as projection on db.Items;
    
    action InsertItems();

    action UpdateItems1();
    action UpdateItems2();
}
