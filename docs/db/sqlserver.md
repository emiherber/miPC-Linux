# Scripts genenerales

## Cambiar OWNER

```sql
DECLARE @tabla as VARCHAR(100)
DECLARE rs CURSOR FOR
SELECT 'ownerOriginal.' + sysobjects.name FROM sysobjects WHERE xtype in('V','U','P','FN')
OPEN rs
    FETCH NEXT FROM rs
    INTO @tabla
      WHILE @@FETCH_STATUS = 0
      BEGIN
        PRINT @tabla
        EXEC sp_changeobjectowner @tabla, 'dbo'
        Fetch NEXT FROM rs
        into @tabla
      END
    CLOSE rs
DEALLOCATE rs
```
