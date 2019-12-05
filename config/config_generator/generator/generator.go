


package generator

import (
	"encoding/json"
	"os"

	"za-white-screen/model"
)

func GenerateDefaultConfig(outputFile *os.File) error {
	defaultCfg := &model.Config{}
	defaultCfg.SetDefaults()
	if data, err := json.MarshalIndent(defaultCfg, "", "  "); err != nil {
		return err
	} else if _, err := outputFile.Write(data); err != nil {
		return err
	}
	return nil
}
