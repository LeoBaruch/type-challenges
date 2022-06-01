type Pop<T extends unknown[]> = T extends [...infer R, infer L] ? [...R] : []; 
