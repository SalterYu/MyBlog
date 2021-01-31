class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>; // C
type T1 = InstanceType<any>; // any
type T2 = InstanceType<never>; // never
type T3 = InstanceType<String>; // Error
type T4 = InstanceType<Function>; // Error

